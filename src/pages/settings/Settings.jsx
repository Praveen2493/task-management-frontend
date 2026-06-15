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

            <label className="font-semibold">
              Email Notifications
            </label>

            <div className="mt-2">

              <input type="checkbox" />

            </div>

          </div>

          <div>

            <label className="font-semibold">
              Dark Mode
            </label>

            <div className="mt-2">

              <input type="checkbox" />

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Settings;