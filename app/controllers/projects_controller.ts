import { HttpContextContract } from '@adonisjs/core/http';
import Project from '../models/portfolio.js'; // Adjust the path to the actual location of your project model file

export default class ProjectsController {

  /**
   * Get all projects
   */
  public async index({ response }: HttpContextContract) {
    try {
      const projects = await Project.all();
      return response.ok(projects);
    } catch (error) {
      console.error(error);
      return response.internalServerError({ message: 'Failed to fetch projects' });
    }
  }

  /**
   * Create a new project
   */
  public async store({ request, response }: HttpContextContract) {
    try {
      const projectData = request.only(['projectName', 'projectDescription', 'imageUrl', 'userId']);
      const project = new Project();
      project.projectName = projectData.projectName;
      project.projectDescription = projectData.projectDescription;
      project.imageUrl = projectData.imageUrl;
      project.userId = projectData.userId;
      await project.save();
      return response.created(project);
    } catch (error) {
      console.error(error);
      return response.internalServerError({ message: 'Failed to create project' });
    }
  }

  /**
   * Get a single project by ID
   */
  public async show({ params, response }: HttpContextContract) {
    try {
      const projectId = params.id;
      const project = await Project.findOrFail(projectId);
      return response.ok(project);
    } catch (error) {
      console.error(error);
      return response.notFound({ message: 'Project not found' });
    }
  }

  /**
   * Update a project by ID
   */
  public async update({ params, request, response }: HttpContextContract) {
    try {
      const projectId = params.id;
      const project = await Project.findOrFail(projectId);
      const projectData = request.only(['projectName', 'projectDescription', 'imageUrl', 'userId']);
      project.projectName = projectData.projectName || project.projectName;
      project.projectDescription = projectData.projectDescription || project.projectDescription;
      project.imageUrl = projectData.imageUrl || project.imageUrl;
      project.userId = projectData.userId || project.userId;
      await project.save();
      return response.ok(project);
    } catch (error) {
      console.error(error);
      return response.internalServerError({ message: 'Failed to update project' });
    }
  }

  /**
   * Delete a project by ID
   */
  public async destroy({ params, response }: HttpContextContract) {
    try {
      const projectId = params.id;
      const project = await Project.findOrFail(projectId);
      await project.delete();
      return response.noContent();
    } catch (error) {
      console.error(error);
      return response.internalServerError({ message: 'Failed to delete project' });
    }
  }
}
