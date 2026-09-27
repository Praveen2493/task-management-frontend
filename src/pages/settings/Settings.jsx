import MainLayout from "../../layouts/MainLayout";

const Settings = () => {
  return (
    <MainLayout>

      <div className="bg-white rounded-xl shadow p-8">

        <h1 className="text-3xl font-bold mb-6">
          Settings
        </h1>

        <div className="space-y-6">

          <div>

            <label htmlFor="email-notifications" className="font-semibold">
              Email Notifications
            </label>

            <div className="mt-2">

              <input id="email-notifications" type="checkbox" />

            </div>

          </div>

          <div>

            <label htmlFor="dark-mode" className="font-semibold">
              Dark Mode
            </label>

            <div className="mt-2">

              <input id="dark-mode" type="checkbox" />

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Settings;