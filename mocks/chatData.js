/** Pseudo chat data */
export const chatData = [
  {
    id: 1,
    user: {
      id: 1,
      firstName: 'Ralph',
      lastName: 'Edwards',
      avatar: 'https://bit.ly/dan-abramov',
    },
    question: {
      title: 'Need Chakra dev for 3 week project',
      content: `<p>Nunc, lacus tincidunt vitae quam. Quis ultrices imperdiet pellentesque nunc, nunc ac. Sem vehicula tellus amet cursus mi. Elit, feugiat elit sit scelerisque elit interdum tellus cras in nulla consequat.
        Ullamcorper pretium venenatis a, enim est aenean quam at.</p><p>Tempor aliquam nisl vivamus odio vehicula. Lectus morbi vestibulum mauris, orci non ac pulvinar. Tristique consequat amet sed rhoncus, etiam etiam.
        Porttitor nisl morbi dictumst egestas ac?</p>`,
      lastUpdate: 1638606926102,
    },
    replies: [
      {
        id: 1,
        user: {
          id: 2,
          firstName: 'Eleanor',
          lastName: 'Pena',
          avatar: 'https://bit.ly/kent-c-dodds',
        },
        reply: {
          title: 'Eleanor Pena',
          content: `<p>Nunc, lacus tincidunt vitae quam. Quis ultrices imperdiet pellentesque nunc, nunc ac. Sem vehicula tellus amet cursus mi. Elit, feugiat elit sit scelerisque elit interdum tellus cras in nulla consequat.
        Ullamcorper pretium venenatis a, enim est aenean quam at.</p>`,
          lastUpdate: 1638607051617,
        },
        replies: [
          {
            id: 1,
            user: {
              id: 3,
              firstName: 'Stephen',
              lastName: 'King',
              avatar: 'https://bit.ly/ryan-florence',
            },
            reply: {
              title: 'Stephen King',
              content: `<p>Nunc, lacus tincidunt vitae quam?</p>`,
              lastUpdate: 1638606926102,
            },
          },
          {
            id: 2,
            user: {
              id: 4,
              firstName: 'Neil',
              lastName: 'Gaiman',
              avatar: 'https://bit.ly/prosper-baba',
            },
            reply: {
              title: 'Neil Gaiman',
              content: `<p>Nunc, lacus tincidunt vitae quam. Quis ultrices imperdiet pellentesque nunc, nunc ac. Sem vehicula tellus amet cursus mi. Elit, feugiat elit sit scelerisque elit interdum tellus cras in nulla consequat.
        Ullamcorper pretium venenatis?</p>`,
              lastUpdate: 1638607201841,
            },
          },
          {
            id: 3,
            user: {
              id: 5,
              firstName: 'Joe',
              lastName: 'Hill',
              avatar: 'https://bit.ly/prosper-baba',
            },
            reply: {
              title: 'Joe Hill',
              content: `<p>Nunc, lacus tincidunt vitae quam. Quis ultrices imperdiet pellentesque nunc, nunc ac. Sem vehicula tellus amet cursus mi. Elit, feugiat elit sit scelerisque elit interdum tellus cras in nulla consequat.
        Ullamcorper pretium venenatis?</p>`,
              lastUpdate: 1638607201841,
            },
          },
          {
            id: 4,
            user: {
              id: 6,
              firstName: 'Dean',
              lastName: 'Koontz',
              avatar: 'https://bit.ly/prosper-baba',
            },
            reply: {
              title: 'Dean Koontz',
              content: `<p>Nunc, lacus tincidunt vitae quam. Quis ultrices imperdiet pellentesque nunc, nunc ac. Sem vehicula tellus amet cursus mi. Elit, feugiat elit sit scelerisque elit interdum tellus cras in nulla consequat.
        Ullamcorper pretium venenatis?</p>`,
              lastUpdate: 1638607201841,
            },
          }
        ],
      },
      {
        id: 2,
        user: {
          id: 7,
          firstName: 'George',
          lastName: 'Martin',
          avatar: 'https://bit.ly/code-beast',
        },
        reply: {
          title: 'George Martin',
          content: `<p>Tempor aliquam nisl vivamus odio vehicula. Lectus morbi vestibulum mauris, orci non ac pulvinar. Tristique consequat amet sed rhoncus, etiam etiam.
        Porttitor nisl morbi dictumst egestas ac?</p>`,
          lastUpdate: 1638607424922,
        },
        replies: [],
      },
    ],
  },
  {
    id: 2,
    user: {
      id: 8,
      firstName: 'Robert',
      lastName: 'Asprin',
      avatar: 'https://bit.ly/sage-adebayo',
    },
    question: {
      title: 'Anyone know a good SEO person?',
      content: `<p>Nunc, lacus tincidunt vitae quam. Quis ultrices imperdiet pellentesque nunc, nunc ac. Sem vehicula tellus amet cursus mi. Elit, feugiat elit sit scelerisque elit interdum tellus cras in nulla consequat.
        Ullamcorper pretium venenatis a, enim est aenean quam at.</p><p>Tempor aliquam nisl vivamus odio vehicula. Lectus morbi vestibulum mauris, orci non ac pulvinar. Tristique consequat amet sed rhoncus, etiam etiam.
        Porttitor nisl morbi dictumst egestas ac?</p>`,
      lastUpdate: 1638607415538,
    },
    replies: [],
  },
];

/** Pseudo user */
export const userData = {
  id: 4,
  firstName: 'Robert',
  lastName: 'Asprin',
  avatar: 'https://bit.ly/sage-adebayo',
};
