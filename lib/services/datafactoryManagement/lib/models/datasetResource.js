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

const models = require('./index');

/**
 * Dataset resource type.
 *
 * @extends models['SubResource']
 */
class DatasetResource extends models['SubResource'] {
  /**
   * Create a DatasetResource.
   * @member {object} properties Dataset properties.
   * @member {string} [properties.description] Dataset description.
   * @member {object} [properties.structure] Columns that define the structure
   * of the dataset. Type: array (or Expression with resultType array),
   * itemType: DatasetDataElement.
   * @member {object} [properties.linkedServiceName] Linked service reference.
   * @member {string} [properties.linkedServiceName.referenceName] Reference
   * LinkedService name.
   * @member {object} [properties.parameters] Parameters for dataset.
   * @member {string} [properties.type] Polymorphic Discriminator
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DatasetResource
   *
   * @returns {object} metadata of DatasetResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DatasetResource',
      type: {
        name: 'Composite',
        className: 'DatasetResource',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            readOnly: true,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: true,
            serializedName: 'properties',
            defaultValue: {},
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'type',
                clientName: 'type'
              },
              uberParent: 'Dataset',
              className: 'Dataset'
            }
          }
        }
      }
    };
  }
}

module.exports = DatasetResource;