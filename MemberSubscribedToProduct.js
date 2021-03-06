/*
 * File: app/model/MemberSubscribedToProduct.js
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

Ext.define('Cobuy.model.MemberSubscribedToProduct', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'member_id'
        },
        {
            name: 'product_id'
        },
        {
            name: 'status'
        },
        {
            name: 'topup_status'
        },
        {
            name: 'type'
        },
        {
            name: 'subscription_quantity',
            type: 'int'
        },
        {
            name: 'top_up_quantity',
            type: 'int'
        },
        {
            name: 'per_delivery_quantity',
            type: 'int'
        },
        {
            name: 'remaining_subscription_quantity',
            type: 'int'
        },
        {
            name: 'need_escrow_agreement',
            type: 'boolean'
        },
        {
            name: 'is_escrow_accepted',
            type: 'boolean'
        },
        {
            name: 'is_delivery_scheduled',
            type: 'boolean'
        },
        {
            name: 'escrow_agreement_file'
        },
        {
            name: 'day_of_delivery'
        },
        {
            name: 'week_of_delivery'
        },
        {
            name: 'delivery_frequency'
        },
        {
            name: 'date_of_first_delivery',
            type: 'date'
        },
        {
            name: 'date_of_last_delivery',
            type: 'date'
        },
        {
            name: 'date_of_next_delivery',
            type: 'date'
        },
        {
            name: 'date_product_was_subscribed_to_member',
            type: 'date'
        },
        {
            name: 'date_product_to_member_was_updated',
            type: 'date'
        },
        {
            name: 'product_was_subscribed_by'
        },
        {
            name: 'product_was_updated_by'
        },
        {
            name: 'escrow_id',
            type: 'int'
        }
    ]
});