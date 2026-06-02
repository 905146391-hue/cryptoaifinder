// Lightweight Markdown → HTML converter (no external dependencies)
// Supports: headings, paragraphs, bold, italic, links, images, lists, blockquotes, code, hr, tables

export function markdownToHtml(md: string): string {
  const lines = md.split("\n");
  const htmlParts: string[] = [];
  let inList: boolean | "ul" | "ol" = false;
  let inBlockquote = false;
  let inTable = false;
  let tableRows: string[] = [];

  function closeList() {
    if (inList) {
      htmlParts.push(inList === "ol" ? "</ol>" : "</ul>");
      inList = false;
    }
  }

  function closeBlockquote() {
    if (inBlockquote) {
      htmlParts.push("</blockquote>");
      inBlockquote = false;
    }
  }

  function closeTable() {
    if (inTable && tableRows.length > 0) {
      htmlParts.push("<table>");
      htmlParts.push(tableRows.join("\n"));
      htmlParts.push("</table>");
      tableRows = [];
      inTable = false;
    }
  }

  function inlineFormat(text: string): string {
    // Code spans
    text = text.replace(/`([^`]+)`/g, '<code class="bg-[#0d0d14] px-1.5 py-0.5 rounded text-cyan-300 text-sm">$1</code>');
    // Bold + italic
    text = text.replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>');
    // Bold
    text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    // Italic
    text = text.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');
    // Links [text](url)
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-cyan-400 hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer">$1</a>');
    return text;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Close contexts when empty line
    if (line.trim() === "") {
      closeTable();
      if (!inList && !inBlockquote) {
        // just a paragraph break
      }
      continue;
    }

    // Table detection
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      closeList();
      closeBlockquote();
      if (line.match(/^\|[\s\-:|]+\|$/)) {
        // separator row — skip
        continue;
      }
      const cells = line
        .split("|")
        .filter((c) => c.trim() !== "")
        .map((c) => c.trim());
      if (tableRows.length === 0) {
        // header row
        tableRows.push(
          "<thead><tr>" +
            cells.map((c) => `<th class="px-4 py-2 text-left text-sm font-semibold text-white border-b border-[#1a1a2e]">${inlineFormat(c)}</th>`).join("") +
            "</tr></thead>"
        );
      } else {
        if (!tableRows.some((r) => r.includes("<tbody>"))) {
          tableRows.push("<tbody>");
        }
        tableRows.push(
          "<tr>" +
            cells.map((c) => `<td class="px-4 py-2 text-sm text-[#94a3b8] border-b border-[#1a1a2e]/50">${inlineFormat(c)}</td>`).join("") +
            "</tr>"
        );
      }
      inTable = true;
      continue;
    } else if (inTable) {
      closeTable();
    }

    // Blockquote
    if (line.trim().startsWith("> ")) {
      closeList();
      if (!inBlockquote) {
        htmlParts.push('<blockquote class="border-l-4 border-cyan-500/50 pl-4 py-2 my-4 text-[#94a3b8] italic">');
        inBlockquote = true;
      }
      htmlParts.push(`<p>${inlineFormat(line.trim().slice(2))}</p>`);
      continue;
    } else if (inBlockquote) {
      closeBlockquote();
    }

    // Headings
    const hMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (hMatch) {
      closeList();
      closeTable();
      const level = hMatch[1].length;
      const text = inlineFormat(hMatch[2]);
      const classes: Record<number, string> = {
        1: "text-3xl font-bold text-white mt-8 mb-4",
        2: "text-2xl font-bold text-white mt-6 mb-3",
        3: "text-xl font-semibold text-white mt-5 mb-2",
        4: "text-lg font-semibold text-white mt-4 mb-2",
        5: "text-base font-semibold text-white mt-3 mb-1",
        6: "text-sm font-semibold text-white mt-3 mb-1",
      };
      htmlParts.push(`<h${level} class="${classes[level]}">${text}</h${level}>`);
      continue;
    }

    // Horizontal rule
    if (line.match(/^(-{3,}|\*{3,}|_{3,})$/)) {
      closeList();
      closeTable();
      htmlParts.push('<hr class="border-[#1a1a2e] my-6" />');
      continue;
    }

    // Unordered list
    const ulMatch = line.match(/^[\s]*[-*+]\s+(.+)/);
    if (ulMatch) {
      closeTable();
      if (inList !== "ul") {
        closeList();
        htmlParts.push('<ul class="list-disc list-outside pl-6 space-y-1 my-3 text-[#94a3b8]">');
        inList = "ul";
      }
      htmlParts.push(`<li>${inlineFormat(ulMatch[1])}</li>`);
      continue;
    }

    // Ordered list
    const olMatch = line.match(/^[\s]*\d+\.\s+(.+)/);
    if (olMatch) {
      closeTable();
      if (inList !== "ol") {
        closeList();
        htmlParts.push('<ol class="list-decimal list-outside pl-6 space-y-1 my-3 text-[#94a3b8]">');
        inList = "ol";
      }
      htmlParts.push(`<li>${inlineFormat(olMatch[1])}</li>`);
      continue;
    }

    // Close list if not a list item
    closeList();

    // Code block
    if (line.trim().startsWith("```")) {
      // Simple code block handling
      const lang = line.trim().slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      htmlParts.push(
        `<pre class="bg-[#0d0d14] border border-[#1a1a2e] rounded-xl p-4 my-4 overflow-x-auto"><code class="text-sm text-[#94a3b8]">${codeLines.join("\n").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`
      );
      continue;
    }

    // Paragraph
    htmlParts.push(`<p class="text-[#94a3b8] leading-relaxed my-3">${inlineFormat(line)}</p>`);
  }

  // Close any remaining open blocks
  closeList();
  closeBlockquote();
  closeTable();

  return htmlParts.join("\n");
}
