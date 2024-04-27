import User from "../models/user.js";
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {

  /**
   * Get all users
   */
  public async index({ response }: HttpContext) {
    try {
      const users = await User.all();
      return response.ok(users);
    } catch (error) {
      console.error(error);
      return response.internalServerError({ message: 'Failed to fetch users' });
    }
  }

  /**
   * Create a new user
   */
  public async store({ request, response }: HttpContext) {
    try {
      const userData = request.only(['email', 'address', 'linkedInurl']);
      const user = new User();
      user.email = userData.email;
      user.address = userData.address;
      user.linkedInurl = userData.linkedInurl;
      await user.save();
      return response.created(user);
    } catch (error) {
      console.error(error);
      return response.internalServerError({ message: 'Failed to create user' });
    }
  }

  /**
   * Get a single user by ID
   */
  public async show({ params, response }: HttpContext) {
    try {
      const userId = params.id;
      const user = await User.findOrFail(userId);
      return response.ok(user);
    } catch (error) {
      console.error(error);
      return response.notFound({ message: 'User not found' });
    }
  }

  /**
   * Update a user by ID
   */
  public async update({ params, request, response }: HttpContext) {
    try {
      const userId = params.id;
      const user = await User.findOrFail(userId);
      const userData = request.only(['email', 'address', 'linkedInurl']);
      user.email = userData.email || user.email;
      user.address = userData.address || user.address;
      user.linkedInurl = userData.linkedInurl || user.linkedInurl;
      await user.save();
      return response.ok(user);
    } catch (error) {
      console.error(error);
      return response.internalServerError({ message: 'Failed to update user' });
    }
  }

  /**
   * Delete a user by ID
   */
  public async destroy({ params, response }: HttpContext) {
    try {
      const userId = params.id;
      const user = await User.findOrFail(userId);
      await user.delete();
      return response.noContent();
    } catch (error) {
      console.error(error);
      return response.internalServerError({ message: 'Failed to delete user' });
    }
  }
}
