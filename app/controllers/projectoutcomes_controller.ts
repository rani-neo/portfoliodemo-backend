// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpContext} from '@adonisjs/core/http';

import ProjectOutcome from '../models/project.js'; // Adjust the path to the actual location of your ProjectOutcome model file

export default class ProjectOutcomeController {

  /**
   * Get all project outcomes
   */
  public async index({ response }: HttpContext) {
    try {
      const projectOutcomes = await ProjectOutcome.all();
      return response.ok(projectOutcomes);
    } catch (error) {
      console.error(error);
      return response.internalServerError({ message: 'Failed to fetch project outcomes' });
    }
  }

  /**
   * Create a new project outcome
   */
  public async store({ request, response }: HttpContext) {
    try {
      const projectOutcomeData = request.only(['verb', 'subject', 'fromTo', 'unit', 'unitOfMeasure']); // Adjust field names as needed
      const projectOutcome = new ProjectOutcome();
      projectOutcome.verb = projectOutcomeData.verb;
      projectOutcome.subject = projectOutcomeData.subject;
      projectOutcome.fromTo = projectOutcomeData.fromTo;
      projectOutcome.unit = projectOutcomeData.unit;
      projectOutcome.unitOfMeasure = projectOutcomeData.unitOfMeasure;
      await projectOutcome.save();
      return response.created(projectOutcome);
    } catch (error) {
      console.error(error);
      return response.internalServerError({ message: 'Failed to create project outcome' });
    }
  }

  /**
   * Get a single project outcome by ID
   */
  public async show({ params, response }: HttpContext) {
    try {
      const projectOutcomeId = params.id;
      const projectOutcome = await ProjectOutcome.findOrFail(projectOutcomeId);
      return response.ok(projectOutcome);
    } catch (error) {
      console.error(error);
      return response.notFound({ message: 'Project outcome not found' });
    }
  }

  /**
   * Update a project outcome by ID
   */
  public async update({ params, request, response }: HttpContext) {
    try {
      const projectOutcomeId = params.id;
      const projectOutcome = await ProjectOutcome.findOrFail(projectOutcomeId);
      const projectOutcomeData = request.only(['verb', 'subject', 'fromTo', 'unit', 'unitOfMeasure']); // Adjust field names as needed
      projectOutcome.verb = projectOutcomeData.verb || projectOutcome.verb;
      projectOutcome.subject = projectOutcomeData.subject || projectOutcome.subject;
      projectOutcome.fromTo = projectOutcomeData.fromTo || projectOutcome.fromTo;
      projectOutcome.unit = projectOutcomeData.unit || projectOutcome.unit;
      projectOutcome.unitOfMeasure = projectOutcomeData.unitOfMeasure || projectOutcome.unitOfMeasure;
      await projectOutcome.save();
      return response.ok(projectOutcome);
    } catch (error) {
      console.error(error);
      return response.internalServerError({ message: 'Failed to update project outcome' });
    }
  }

  /**
   * Delete a project outcome by ID
   */
  public async destroy({ params, response }: HttpContext) {
    try {
      const projectOutcomeId = params.id;
      const projectOutcome = await ProjectOutcome.findOrFail(projectOutcomeId);
      await projectOutcome.delete();
      return response.noContent();
    } catch (error) {
      console.error(error);
      return response.internalServerError({ message: 'Failed to delete project outcome' });
    }
  }
}
