/*
 * File: app/model/Member.js
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

Ext.define('Cobuy.model.Member', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'id'
        },
        {
            name: 'current_membership_type_id'
        },
        {
            name: 'username'
        },
        {
            name: 'email'
        },
        {
            name: 'password'
        },
        {
            name: 'picture'
        },
        {
            name: 'picture_size'
        },
        {
            name: 'address1'
        },
        {
            name: 'address2'
        },
        {
            name: 'city_id'
        },
        {
            name: 'state_id'
        },
        {
            name: 'country_id'
        },
        {
            name: 'membership_number'
        },
        {
            name: 'delivery_address1'
        },
        {
            name: 'delivery_address2'
        },
        {
            name: 'delivery_city_id'
        },
        {
            name: 'delivery_state_id'
        },
        {
            name: 'delivery_country_id'
        },
        {
            name: 'status'
        },
        {
            name: 'category'
        },
        {
            name: 'gender'
        },
        {
            name: 'firstname'
        },
        {
            name: 'middlename'
        },
        {
            name: 'lastname'
        },
        {
            name: 'name'
        },
        {
            name: 'dateofbirth',
            type: 'date'
        },
        {
            name: 'religion'
        },
        {
            name: 'maritalstatus'
        },
        {
            name: 'role'
        },
        {
            name: 'account_number'
        },
        {
            name: 'account_title'
        },
        {
            name: 'member_bank'
        },
        {
            name: 'create_time',
            type: 'date'
        },
        {
            name: 'create_user_id'
        },
        {
            name: 'update_time',
            type: 'date'
        },
        {
            name: 'update_user_id'
        },
        {
            name: 'renewal_due_date',
            type: 'date'
        },
        {
            name: 'accounttype'
        }
    ]
});