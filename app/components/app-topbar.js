import Ember from 'ember';
import ENV from 'explorer/config/environment';

export default Ember.Component.extend({
  developerportalUrl: ENV.developerportalUrl,
  apiKeyUrl: ENV.apiKeyUrl,
  availableApisNavItems: [
    { text: 'Market Research Library', path: 'market-research-library.html' },
    { text: 'Consolidated Screening List', path: 'consolidated-screening-list.html' },
    { text: 'Trade Events', path: 'trade-events.html' },
    { text: 'Trade Leads', path: 'trade-leads.html' },
    { text: 'Tariff Rates', path: 'tariff-rates.html' },
    { text: 'FAQs on Exporting', path: 'faqs-exporting.html' },
    { text: 'ITA Offices & Centers', path: 'ita-office-locations.html' },
    { text: 'Trade News & Articles', path: 'ita-trade-articles.html' },
    { text: 'Export Assistance Centers', path: 'ita-zip-codes.html'},
  ],
  additionalResourcesNavItems: [
    { text: 'Guidance', path: 'guidance.html' },
    { text: 'Contact', path: 'contact.html' },
    { text: 'App Gallery', path: 'app-gallery.html' },
    { text: 'API FAQs', path: 'api-faqs.html' },
    { text: 'Change Log', path: 'change-log.html' },
    { text: 'Terms of Service', path: 'tos.html' }
  ]
});
