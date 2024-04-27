import Portfolio from '../models/portfolio.js'; // Adjust the path to the actual location of your portfolio model file
import { HttpContext} from '@adonisjs/core/http';
export default class PortfoliosController {

  /**
   * Get all portfolios
   */
  public async index({ response }: HttpContext) {
    try {
      const portfolios = await Portfolio.all();
      return response.ok(portfolios);
    } catch (error) {
      console.error(error);
      return response.internalServerError({ message: 'Failed to fetch portfolios' });
    }
  }

  /**
   * Create a new portfolio
   */
  public async store({ request, response }: HttpContext) {
    try {
      const portfolioData = request.only(['name', 'userId']); // Adjust field names as needed
      const portfolio = new Portfolio();
      portfolio.name = portfolioData.name;
      portfolio.userId = portfolioData.userId;
      await portfolio.save();
      return response.created(portfolio);
    } catch (error) {
      console.error(error);
      return response.internalServerError({ message: 'Failed to create portfolio' });
    }
  }

  /**
   * Get a single portfolio by ID
   */
  public async show({ params, response }: HttpContext) {
    try {
      const portfolioId = params.id;
      const portfolio = await Portfolio.findOrFail(portfolioId);
      return response.ok(portfolio);
    } catch (error) {
      console.error(error);
      return response.notFound({ message: 'Portfolio not found' });
    }
  }

  /**
   * Update a portfolio by ID
   */
  public async update({ params, request, response }: HttpContext) {
    try {
      const portfolioId = params.id;
      const portfolio = await Portfolio.findOrFail(portfolioId);
      const portfolioData = request.only(['name', 'userId']); // Adjust field names as needed
      portfolio.name = portfolioData.name || portfolio.name;
      portfolio.userId = portfolioData.userId || portfolio.userId;
      await portfolio.save();
      return response.ok(portfolio);
    } catch (error) {
      console.error(error);
      return response.internalServerError({ message: 'Failed to update portfolio' });
    }
  }

  /**
   * Delete a portfolio by ID
   */
  public async destroy({ params, response }: HttpContext) {
    try {
      const portfolioId = params.id;
      const portfolio = await Portfolio.findOrFail(portfolioId);
      await portfolio.delete();
      return response.noContent();
    } catch (error) {
      console.error(error);
      return response.internalServerError({ message: 'Failed to delete portfolio' });
    }
  }
}
