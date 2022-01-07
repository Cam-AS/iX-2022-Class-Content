exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        title: 'The First Post',
        content: 'The First Content Hell Yeah',
      },
      {
        title: 'The Second Post',
        content: 'The Second Content Hell Yeah',
      },
    ],
  });
};
