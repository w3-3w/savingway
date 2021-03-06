'use strict';

module.exports = {
  incomingUrl: process.env['SLACK_INCOMING_WEBHOOK'],
  verificationToken: process.env['SLACK_VERIFICATION_TOKEN'],
  teamId: process.env['SLACK_TEAM_ID'],
  channelId: process.env['SLACK_CHANNEL_ID'],
  permittedUserIds: (str => (
    new Set(str ? str.split(',') : undefined)
  ))(process.env['SLACK_PERMITTED_USER_IDS'])
};
