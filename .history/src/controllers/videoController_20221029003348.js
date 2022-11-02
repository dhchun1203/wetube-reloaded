export const trending = (req, res) => res.send("Home Page Videos");
export const watch = (req, res) => res.send("Watch");
export const edit = (req, res) => res.send("Edit");

export const see = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
};
