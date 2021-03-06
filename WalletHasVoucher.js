/*
 * File: app/model/WalletHasVoucher.js
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

Ext.define('Cobuy.model.WalletHasVoucher', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'wallet_id'
        },
        {
            name: 'voucher_id'
        },
        {
            name: 'status'
        },
        {
            name: 'voucher_share_in_percentage'
        },
        {
            name: 'actual_voucher_share'
        },
        {
            name: 'available_voucher_value'
        },
        {
            name: 'used_voucher_value'
        },
        {
            name: 'usage_commencement_date',
            type: 'date'
        },
        {
            name: 'date_voucher_was_added_to_wallet',
            type: 'date'
        },
        {
            name: 'date_voucher_was_updated',
            type: 'date'
        },
        {
            name: 'voucher_was_added_by'
        },
        {
            name: 'voucher_was_updated_by'
        }
    ]
});