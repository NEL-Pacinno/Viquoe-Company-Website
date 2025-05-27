// src/controllers/index.ts

export class UserController {
    public async getUsers(req, res) {
        // Logic to get users
    }

    public async createUser(req, res) {
        // Logic to create a user
    }
}

export class ProductController {
    public async getProducts(req, res) {
        // Logic to get products
    }

    public async createProduct(req, res) {
        // Logic to create a product
    }
}

// Export all controllers
export default {
    UserController,
    ProductController,
};