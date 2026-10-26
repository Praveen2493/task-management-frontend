import MainLayout from "../../layouts/MainLayout";
import useNotifications from "../../hooks/useNotifications";

const Notifications = () => {
  const { notifications } = useNotifications();

  return (
    <MainLayout>
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <p className="mb-1 text-sm font-semibold uppercase tracking-[0.16em] text-violet-600">Workspace updates</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Notifications</h1>
          <p className="mt-1 text-sm text-slate-500">Assignments, task changes, and deadline reminders.</p>
        </div>
        <div className="space-y-3">
          {notifications.length ? notifications.map((item) => (
            <article key={item._id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-medium text-slate-800">{item.message}</p>
              {item.createdAt && (
                <time className="mt-2 block text-xs text-slate-400" dateTime={item.createdAt}>
                  {new Date(item.createdAt).toLocaleString()}
                </time>
              )}
            </article>
          )) : (
            <p className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500 shadow-sm">
              You have no notifications yet.
            </p>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Notifications;
