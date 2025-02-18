export interface File {
    id: string;
    name: string;
    type: "file";
    url: string;
}

export interface Folder {
    id: string;
    name: string;
    type: "folder";
    children: Array<File | Folder>;
}

export type Item = File | Folder;

export const mockData: Item[] = [
    {
      id: "1",
      name: "Documents",
      type: "folder",
      children: [
        {
          id: "2",
          name: "Work",
          type: "folder",
          children: [
            { id: "3", name: "Report.pdf", type: "file", url: "https://example.com/report.pdf" },
            { id: "4", name: "Presentation.pptx", type: "file", url: "https://example.com/presentation.pptx" },
          ],
        },
        { id: "5", name: "Resume.docx", type: "file", url: "https://example.com/resume.docx" },
      ],
    },
    {
      id: "6",
      name: "Photos",
      type: "folder",
      children: [
        { id: "7", name: "Vacation.jpg", type: "file", url: "https://example.com/vacation.jpg" },
        { id: "8", name: "Family.jpg", type: "file", url: "https://example.com/family.jpg" },
      ],
    },
    { id: "9", name: "Todo.txt", type: "file", url: "https://example.com/todo.txt" },
  ]
  