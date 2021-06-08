"use strict";

const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findSlug(ctx) {
    const { slug } = ctx.params.replace(/[*+~.()'"!:@]/g, "-");

    const entity = await strapi.services.ramble.find({ slug: slug });
    return sanitizeEntity(entity, { model: strapi.models.ramble });
  },
};
