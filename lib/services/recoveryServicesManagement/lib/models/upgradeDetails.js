/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Details for upgrading vault.
 *
 */
class UpgradeDetails {
  /**
   * Create a UpgradeDetails.
   * @member {string} [operationId] ID of the vault upgrade operation.
   * @member {date} [startTimeUtc] UTC time at which the upgrade operation has
   * started.
   * @member {date} [lastUpdatedTimeUtc] UTC time at which the upgrade
   * operation status was last updated.
   * @member {date} [endTimeUtc] UTC time at which the upgrade operation has
   * ended.
   * @member {string} [status] Status of the vault upgrade operation. Possible
   * values include: 'Unknown', 'InProgress', 'Upgraded', 'Failed'
   * @member {string} [message] Message to the user containing information
   * about the upgrade operation.
   * @member {string} [triggerType] The way the vault upgradation was
   * triggered. Possible values include: 'UserTriggered', 'ForcedUpgrade'
   * @member {string} [upgradedResourceId] Resource ID of the upgraded vault.
   * @member {string} [previousResourceId] Resource ID of the vault before the
   * upgrade.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpgradeDetails
   *
   * @returns {object} metadata of UpgradeDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpgradeDetails',
      type: {
        name: 'Composite',
        className: 'UpgradeDetails',
        modelProperties: {
          operationId: {
            required: false,
            readOnly: true,
            serializedName: 'operationId',
            type: {
              name: 'String'
            }
          },
          startTimeUtc: {
            required: false,
            readOnly: true,
            serializedName: 'startTimeUtc',
            type: {
              name: 'DateTime'
            }
          },
          lastUpdatedTimeUtc: {
            required: false,
            readOnly: true,
            serializedName: 'lastUpdatedTimeUtc',
            type: {
              name: 'DateTime'
            }
          },
          endTimeUtc: {
            required: false,
            readOnly: true,
            serializedName: 'endTimeUtc',
            type: {
              name: 'DateTime'
            }
          },
          status: {
            required: false,
            readOnly: true,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            readOnly: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          triggerType: {
            required: false,
            readOnly: true,
            serializedName: 'triggerType',
            type: {
              name: 'String'
            }
          },
          upgradedResourceId: {
            required: false,
            readOnly: true,
            serializedName: 'upgradedResourceId',
            type: {
              name: 'String'
            }
          },
          previousResourceId: {
            required: false,
            readOnly: true,
            serializedName: 'previousResourceId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UpgradeDetails;