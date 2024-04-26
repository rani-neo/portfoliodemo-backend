import { HttpContextContract } from '@adonisjs/core/http';
import Role from '../models/role.js'; // Adjust the path to the actual location of your Role model file

export default class RoleController {

  /**
   * Get all roles
   */
  public async index({ response }: HttpContextContract) {
    try {
      const roles = await Role.all();
      return response.ok(roles);
    } catch (error) {
      console.error(error);
      return response.internalServerError({ message: 'Failed to fetch roles' });
    }
  }

  /**
   * Create a new role
   */
  public async store({ request, response }: HttpContextContract) {
    try {
      const roleData = request.only(['name']); // Adjust field names as needed
      const role = new Role();
      role.name = roleData.name;
      await role.save();
      return response.created(role);
    } catch (error) {
      console.error(error);
      return response.internalServerError({ message: 'Failed to create role' });
    }
  }

  /**
   * Get a single role by ID
   */
  public async show({ params, response }: HttpContextContract) {
    try {
      const roleId = params.id;
      const role = await Role.findOrFail(roleId);
      return response.ok(role);
    } catch (error) {
      console.error(error);
      return response.notFound({ message: 'Role not found' });
    }
  }

  /**
   * Update a role by ID
   */
  public async update({ params, request, response }: HttpContextContract) {
    try {
      const roleId = params.id;
      const role = await Role.findOrFail(roleId);
      const roleData = request.only(['name']); // Adjust field names as needed
      role.name = roleData.name || role.name;
      await role.save();
      return response.ok(role);
    } catch (error) {
      console.error(error);
      return response.internalServerError({ message: 'Failed to update role' });
    }
  }

  /**
   * Delete a role by ID
   */
  public async destroy({ params, response }: HttpContextContract) {
    try {
      const roleId = params.id;
      const role = await Role.findOrFail(roleId);
      await role.delete();
      return response.noContent();
    } catch (error) {
      console.error(error);
      return response.internalServerError({ message: 'Failed to delete role' });
    }
  }
}
