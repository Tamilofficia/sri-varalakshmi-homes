const Project = require('../models/Project');

// @desc    Fetch all projects
// @route   GET /api/projects
// @access  Public
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Fetch single project
// @route   GET /api/projects/:id
// @access  Public
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ success: false, message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create a project
// @route   POST /api/projects
// @access  Private
const createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    const createdProject = await project.save();
    res.status(201).json(createdProject);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private
const updateProject = async (req, res) => {
  try {
    const { name, location, priceMin, priceMax, plotSizeMin, plotSizeMax, description, status, images, layoutMap, features, landmarks } = req.body;
    
    const project = await Project.findById(req.params.id);
    if (project) {
      project.name = name || project.name;
      project.location = location || project.location;
      project.priceMin = priceMin !== undefined ? priceMin : project.priceMin;
      project.priceMax = priceMax !== undefined ? priceMax : project.priceMax;
      project.plotSizeMin = plotSizeMin !== undefined ? plotSizeMin : project.plotSizeMin;
      project.plotSizeMax = plotSizeMax !== undefined ? plotSizeMax : project.plotSizeMax;
      project.description = description || project.description;
      project.status = status || project.status;
      project.images = images || project.images;
      project.layoutMap = layoutMap || project.layoutMap;
      project.features = features || project.features;
      project.landmarks = landmarks || project.landmarks;

      const updatedProject = await project.save();
      res.json(updatedProject);
    } else {
      res.status(404).json({ success: false, message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      await project.deleteOne();
      res.json({ success: true, message: 'Project removed' });
    } else {
      res.status(404).json({ success: false, message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getProjects, getProjectById, createProject, updateProject, deleteProject };
