import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <header className="w-full py-6 bg-indigo-600 text-white text-center">
        <h1 className="text-4xl font-extrabold">Gift Mate</h1>
        <p className="mt-2 text-lg">Manage your event gifts seamlessly</p>
      </header>

      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Manage Your Events and Gifts with Ease
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Gift Mate is the ultimate platform for organizing events, inviting
            guests, and managing money gifts effortlessly.
          </p>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap justify-center gap-10">
            <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-indigo-700">
                Event Creation
              </h3>
              <p className="mt-4 text-gray-600">
                Easily create and manage events, including setting the date,
                venue, and guest list.
              </p>
            </div>

            <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-indigo-700">
                Guest Invitations
              </h3>
              <p className="mt-4 text-gray-600">
                Invite guests via email, track RSVPs, and manage guest details
                effortlessly.
              </p>
            </div>

            <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-indigo-700">
                Gift Contributions
              </h3>
              <p className="mt-4 text-gray-600">
                Allow your guests to contribute gifts through the platform and
                track their contributions.
              </p>
            </div>

            <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-indigo-700">
                Gift History
              </h3>
              <p className="mt-4 text-gray-600">
                View all your received and contributed gifts in one place with
                detailed history.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
