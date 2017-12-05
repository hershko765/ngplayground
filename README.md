Affiliate Hub/Center
Traffic Hub/Center
Click Hub/Center

Place that all offers meets from various affiliate networks

# Campaigns
campaigns // id, currency_id
campaigns_pixels
campaigns_languages
campaigns_countries
campaigns_sources // id, campaign_id, source_id, payment
campaigns_networks
campaigns_payouts // id, campaign_id, default_payout, payout_type

# Payouts
payouts // id, title, pp1, pp2, pp3

# Traffic Sources
sources

# Affiliate Networks
networks
networks_offers
offers

# Security Roles
roles
permissions
roles_permissions

# Users
users
users_clicks
users_offers
users_networks
users_sources

# currencies
currencies
# Conversions
conversions // id, campaign_id, hash

# targeting

targeting // id, user_id, default_campaign_id

targeting_campaigns // id, targeting_id, weight
targeting_countries

// Sale pixel
http://3213(campaignId).t.clickroyale.io/conversion?hash=323&payout=232&

### Types
Affiliate
Advertiser
Master

###
Affiliates
Advertisers
advertisers_affiliates
Affiliate -> Request to join advertiser {ADVNAME} affiliate network -> 
  Advertiser -> Pending Affiliates

Advertiser -> Invite affiliate {AFFNAME} to your affiliate network -> 
  Affiliate -> You receive an invite from {ADVANME} to join his affiliate network
  
Pay after you earn! you only pay AFTER you earn, the price is fixed per clicks
### 
a Place where affiliate and advertisers meet.

(?) How to attract advertisers? 
  * Upsell tools such as Email/Push Notifications (?)
  * Full analytic and invoices system
  * Geo targeting / Split AB Testing to offers and landers
  
###
Social network for affiliates, advertisers and between
a must have system for anyone who works with internet marketing

###
Business Plan

# For affiliates
* Pay per click (1m, 5m, 20m, 50m, 50m+)
** Price slider for custom clicks plan

# For advertises
* Free for first 6 months, No credit required
* Plan for 10/20/50+ affiliates
* Plan for basic/Premium/Business
* Google Optimizer - like system (Click Hub Optimizer) that will allow ab testing of replacing texts

### The Basics

users
users_networks // id, network_id, np1, np2, np3
users_sources // id, source_id, sp1, sp2, sp3
offers // id, user_id, title, description, network_id,
networks // id, title, integrated:0,1
sources // id, title, integrated:0,1
offers_payouts // id, offer_id, payout_type_id, default_payout, divide_revenue, revenue
payouts_types // id, title ## CPA/CPL, CPS, revshare

offers_conversions // id, offer_id, title, conversion_payout, payout_type, is_confirmation_required
offers_conversions_payouts // id, title, amount, payout_type

campaigns // id, user_id, title, default_offer_id, test_mode, created, modified, deleted
campaigns_sources // id, source_id, click_price_gross, budget

campaigns_events // id, campaign_id, event, created, deleted
campaigns_custom_fields // id, campaign_id, field_name, field_default_value

campaigns_targeting_countries // id, campaign_id, geo_country_id, weight, offer_landing_id
campaigns_targeting_states // id, campaign_id, geo_state_id, weight, offer_landing_id
campaigns_targeting_cities // id, campaign_id, geo_city_id, weight, offer_landing_id

campaigns_targeting_offers // id, campaign_id, weight, offer_landing_id
campaigns_targeting_days // id, campaign_id, targeting_day, weight, offer_landing_id
campaigns_targeting_hours // id, campaign_id, targeting_hour, weight, offer_landing_id

## Default Custom Fields
- p1, p2, p3, p4, p5, source


## Mongo Collections

clicks
conversions // click_uid, created, modified, deleted
events // Browser / Device / Ip / Time / Location
statistics
// campaigns_statistics // id, source_id, clicks, spent, avg_click_price

## Sale Pixel
http://clickhub.co/conversion?c=323&cid=2384723894&payout=40
http://clickhub.co/event?c=323&cid=2384723894&e=upsell

Campaign #354

Default Offer - Crypty Crypto
Weights - 
30% Cryptomania
50% Crypto Crypty
20% Bitcoin World

Countries - 
USA - 100% Bitcoin World
Netherland - 50% Bitcoin World, 50% Crypto Crypty

Device -
Mobile - 80% Bitcoin World, 50% Crypto Crypty
IOS - 100% Crypto Crypty

## Research - Autocomplete
Research methods to do auto complete in input fields for big data (1m, 5m, 10m)
currently methods list to check:
Redis ZRANK/ZSET
Redis Radix Tree
* Mysql Nested Set Model
** Mongo Nested Set Model
Mongo Radix Tree
* If proven to be faster then mongo, will also test radix tree
** Only if mongo radix tree will be proven efficient
All methods should be tested on 8gb memory/4 cores machines
Each methods should have its own server.

