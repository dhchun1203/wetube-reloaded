export const trending = (req, res) => res.send("Home Page Videos");

export const see = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
};

export const edit = (req, res) => {
  return res.send("Edit");
};
