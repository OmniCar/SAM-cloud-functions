#!/bin/bash
set -e
SCRIPT_EXECUTIONPATH="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cp ./src/cf-send-email/package.json ./dist/cf-send-email

cd ./dist/cf-send-email

gcloud beta functions deploy cf-test-sendContractActivatedAfterExtended --trigger-resource test_sendContractActivatedAfterExtended --trigger-event google.pubsub.topic.publish --timeout=300 --entry-point pubSubSendContractActivatedAfterExtended &
gcloud beta functions deploy cf-test-pubSubSendContractActivatedToCustomer --trigger-resource test_pubSubSendContractActivatedToCustomer --trigger-event google.pubsub.topic.publish --timeout=300 --entry-point pubSubSendContractActivatedToCustomer &
gcloud beta functions deploy cf-test-pubSubSendContractChanged --trigger-resource test_pubSubSendContractChanged --trigger-event google.pubsub.topic.publish --timeout=300 --entry-point pubSubSendContractChanged &
gcloud beta functions deploy cf-test-pubSubSendContractOffer --trigger-resource test_pubSubSendContractOffer --trigger-event google.pubsub.topic.publish --timeout=300 --entry-point pubSubSendContractOffer &
gcloud beta functions deploy cf-test-pubSubSendContractOfferReminder --trigger-resource test_pubSubSendContractOfferReminder --trigger-event google.pubsub.topic.publish --timeout=300 --entry-point pubSubSendContractOfferReminder &
gcloud beta functions deploy cf-test-pubSubSendContractReActivated --trigger-resource test_pubSubSendContractReActivated --trigger-event google.pubsub.topic.publish --timeout=300 --entry-point pubSubSendContractReActivated &
gcloud beta functions deploy cf-test-pubSubSendContractSettled --trigger-resource test_pubSubSendContractSettled --trigger-event google.pubsub.topic.publish --timeout=300 --entry-point pubSubSendContractSettled &
gcloud beta functions deploy cf-test-pubSubSendContractSuspended --trigger-resource test_pubSubSendContractSuspended --trigger-event google.pubsub.topic.publish --timeout=300 --entry-point pubSubSendContractSuspended &
gcloud beta functions deploy cf-test-pubSubSendContractTerminated --trigger-resource test_pubSubSendContractTerminated --trigger-event google.pubsub.topic.publish --timeout=300 --entry-point pubSubSendContractTerminated &
gcloud beta functions deploy cf-test-pubSubSendLoginEmailToCustomer --trigger-resource test_pubSubSendLoginEmailToCustomer --trigger-event google.pubsub.topic.publish --timeout=300 --entry-point pubSubSendLoginEmailToCustomer &
gcloud beta functions deploy cf-test-pubSubSendPaymentFailed --trigger-resource test_pubSubSendPaymentFailed --trigger-event google.pubsub.topic.publish --timeout=300 --entry-point pubSubSendPaymentFailed &
gcloud beta functions deploy cf-test-pubSubSendResetPassword --trigger-resource test_pubSubSendResetPassword --trigger-event google.pubsub.topic.publish --timeout=300 --entry-point pubSubSendResetPassword &


gcloud beta functions deploy cf-test-pubSubSendContractActivatedToDealerRecipients --trigger-resource test_pubSubSendContractActivatedToDealerRecipients --trigger-event google.pubsub.topic.publish --timeout=300 --entry-point pubSubSendContractActivatedToDealerRecipients &
gcloud beta functions deploy cf-test-pubSubSendContractSuspendedToDealer --trigger-resource test_pubSubSendContractSuspendedToDealer --trigger-event google.pubsub.topic.publish --timeout=300 --entry-point pubSubSendContractSuspendedToDealer &
