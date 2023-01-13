const adminController = {
  getProjects: (req, res) => {
    return res.render("admin/projects");
  },
};

module.exports = adminController;
