/*
 * File: app/model/ProductHasVendor.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Cobuy.model.ProductHasVendor', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'product_id'
        },
        {
            name: 'vendor_id'
        },
        {
            name: 'status'
        },
        {
            name: 'date_product_was_added_to_vendor'
        },
        {
            name: 'date_product_to_vendor_was_updated'
        },
        {
            name: 'product_was_added_by'
        },
        {
            name: 'product_was_updated_by'
        }
    ]
});