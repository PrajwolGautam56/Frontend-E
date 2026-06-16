const people = [
  {
    name: 'Mr. Ajaya Shrestha',
    role: 'Managing Director / DRRM-CCA Expert',
    imageUrl: 'images/team/ajay.jpg',
    url: 'https://www.facebook.com/ajaya.shrestha.986',
  },
  {
    name: 'Ms. Tara Ale Magar',
    role: 'Executive Director / GIS Analyst / Environment Researcher',
    imageUrl: 'images/team/tara.jpg',
    url: 'https://www.facebook.com/tara.ale.5',
  },
  {
    name: 'Mr. Puranjan Sapkota',
    role: 'Agriculture and Livelihood Expert',
    imageUrl: 'images/team/puranjan.jpeg',
    url: 'https://www.facebook.com/sapkotap',
  },
  {
    name: 'Mr. Bijaya Rai',
    role: 'Environment Expert',
    imageUrl: 'images/team/bijaya.jpg',
    url: 'https://www.facebook.com/hated.person.146',
  },
  {
    name: 'Mr. Ujjal Acharya',
    role: 'Economist / Data Analyst',
  },
  {
    name: 'Ms. Tikeshwari Joshi',
    role: 'GEDSI / NRM Expert',
  },
  {
    name: 'Ms. Pragya Dhakal Neupane',
    role: 'Development Planning Expert',
    imageUrl: 'images/team/pragya.png',
    url: 'https://www.facebook.com/pragya.nepali.7',
  },
  {
    name: 'Ms. Rakshya Neupane',
    role: 'Environment Expert',
    imageUrl: 'images/team/rakshya.jpg',
    url: 'https://www.facebook.com/',
  },
  {
    name: 'Mr. Annan Shrestha',
    role: 'GIS RS Modelling Expert',
    imageUrl: 'images/team/annan.jpg',
    url: 'https://www.facebook.com/dial.annan',
  },
  {
    name: 'Mr. Murli Shah',
    role: 'Civil Engineer',
  },
  {
    name: 'Ishwor Dahal',
    role: 'Admin and Finance',
  },
];

function getInitials(name) {
  return name
    .replace(/^(Mr\.|Ms\.|Dr\.|Prof\.|Lawyer)\s+/i, '')
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function Ourteam() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 py-9">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-amber-500 dark:text-white pb-4">
              Office Team
            </h2>
          </div>

          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {people.map((person) => (
              <div key={person.name} className="text-center text-gray-500 dark:text-gray-400">
                {person.imageUrl ? (
                  <img
                    className="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
                    src={person.imageUrl}
                    alt={person.name}
                  />
                ) : (
                  <div className="mx-auto mb-4 w-36 h-36 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
                    <span className="text-3xl font-bold text-amber-600 dark:text-amber-300">
                      {getInitials(person.name)}
                    </span>
                  </div>
                )}
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {person.name}
                </h3>
                <p>{person.role}</p>
                {person.url && (
                  <ul className="flex justify-center mt-4 space-x-4">
                    <li>
                      <a
                        href={person.url}
                        className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
