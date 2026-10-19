import { FiFile, FiPaperclip } from "react-icons/fi";

const AttachmentSection = () => (
  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
    <div className="mb-4 flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
        <FiPaperclip size={17} />
      </span>
      <div>
        <h2 className="text-base font-bold text-slate-900">Attachments</h2>
        <p className="text-xs text-slate-500">Files related to this task</p>
      </div>
    </div>

    <label htmlFor="task-attachment" className="mb-1.5 block text-sm font-semibold text-slate-700">
      Choose a file
    </label>
    <input
      id="task-attachment"
      type="file"
      className="w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-600 file:mr-4 file:cursor-pointer file:border-0 file:bg-violet-50 file:px-4 file:py-3 file:font-semibold file:text-violet-700 hover:file:bg-violet-100"
    />

    <div className="mt-4 flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-violet-600 shadow-sm">
        <FiFile size={17} />
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-slate-700">project-document.pdf</p>
        <p className="text-xs text-slate-400">Task attachment</p>
      </div>
    </div>
  </section>
);

export default AttachmentSection;
