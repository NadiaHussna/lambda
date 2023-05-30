export const settings = {
  template: `${__dirname}/templates`,
  'email-templates': `${__dirname}/templates/email-templates`,
  'report-templates': `${__dirname}/templates/report-templates`,
  'pdf-templates': `${__dirname}/templates/pdf-templates`,
  'test-database': `${__dirname}/tests/mock/database`,
  notifications: {
    'amla/closed': 'This is to inform that the EDD case was completed by AMLA Team for {{ clientName }} and {{ clientIdNum }}. Thank you.',
    'amla/rerouted':
      'The EDD cases for {{ clientName }} and {{ clientIdNum }} has been rejected. Please complete by {{ targetDate }}. Thank you.',
    'amla/initiated':
      'The EDD cases for {{ clientName }} and {{ clientIdNum }} has been initiated. Please complete by {{ targetDate }}. Thank you.',
    'amla/cancelled': 'The EDD cases for {{ clientName }} and {{ clientIdNum }} has been cancelled. Thank you.',
    'transaction/ce-action':
      'Your order for {{clientNames}} has been {{ action }}{{#if reroute}} to you. Refer to email for more details{{/if}}.{{#if reject}} Refer to email for more details.{{/if}}',
    'transaction/request': '{{ action }} requested for Transaction Number {{ orderNo }}{{ transactionRef }}.',
    'transaction/request-response':
      '{{ eventType }} request for Transaction Number {{ orderNo }}{{ transactionRef }} was {{ action }}.{{#if reason}}\nReason: {{reason}}{{/if}}',
    'transaction/verified':
      'Your order has been received and the physical documents verified.\nPlease take note that your investment will be processed as soon as possible given that supporting documents are in order.',
    'general/request': 'A request to {{eventType}} by {{requestorName}} requires your review.',
    'general/request-response': 'Your {{eventType}} request {{#if name}}for {{name}} {{/if}}has been {{action}}.',
    'general/aa': '{{message}}',
    'general/password': '{{message}}',
  },
}
