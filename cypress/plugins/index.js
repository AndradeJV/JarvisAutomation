/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {}


const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
    allureWriter(on, config);
    return config;
};