const Team = require('../models/Team');

// @desc    Fetch all team members
// @route   GET /api/team
// @access  Public
const getTeamMembers = async (req, res) => {
  try {
    const team = await Team.find({});
    res.json(team);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create a team member
// @route   POST /api/team
// @access  Private
const createTeamMember = async (req, res) => {
  try {
    const member = new Team(req.body);
    const createdMember = await member.save();
    res.status(201).json(createdMember);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update a team member
// @route   PUT /api/team/:id
// @access  Private
const updateTeamMember = async (req, res) => {
  try {
    const { name, position, bio, photo, contact } = req.body;
    const member = await Team.findById(req.params.id);
    if (member) {
      member.name = name || member.name;
      member.position = position || member.position;
      member.bio = bio || member.bio;
      member.photo = photo || member.photo;
      member.contact = contact || member.contact;
      
      const updatedMember = await member.save();
      res.json(updatedMember);
    } else {
      res.status(404).json({ success: false, message: 'Team member not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete a team member
// @route   DELETE /api/team/:id
// @access  Private
const deleteTeamMember = async (req, res) => {
  try {
    const member = await Team.findById(req.params.id);
    if (member) {
      await member.deleteOne();
      res.json({ success: true, message: 'Team member removed' });
    } else {
      res.status(404).json({ success: false, message: 'Team member not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getTeamMembers, createTeamMember, updateTeamMember, deleteTeamMember };
