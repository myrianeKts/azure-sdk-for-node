/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the JobManagerTask class.
 * @constructor
 * Specifies details of a Job Manager task.
 * @member {string} [id] Gets or sets a string that uniquely identifies the
 * Job Manager task. A GUID is recommended.
 * 
 * @member {string} [displayName] Gets or sets the display name of the Job
 * Manager task.
 * 
 * @member {string} [commandLine] Gets or sets the command line of the Job
 * Manager task.
 * 
 * @member {array} [resourceFiles] Gets or sets a list of files that Batch
 * will download to the compute node before running the command line.
 * 
 * @member {array} [environmentSettings] Gets or sets a list of environment
 * variable settings for the Job Manager task.
 * 
 * @member {object} [constraints] Gets or sets constraints that apply to the
 * Job Manager task.
 * 
 * @member {moment.duration} [constraints.maxWallClockTime] Gets or sets the
 * maximum elapsed time that the task may run, measured from the time the
 * task starts. If the task does not complete within the time limit, the
 * Batch service terminates it.
 * 
 * @member {moment.duration} [constraints.retentionTime] Gets or sets the
 * minimum time to retain the working directory for the task on the compute
 * node where it ran. After this time, the Batch service may delete the
 * working directory and all its contents. The default is infinite.
 * 
 * @member {number} [constraints.maxTaskRetryCount] Gets or sets the maximum
 * number of times the task may be retried. The Batch service retries a task
 * if its exit code is nonzero.
 * 
 * @member {boolean} [killJobOnCompletion] Gets or sets whether completion of
 * the Job Manager task signifies completion of the entire job.
 * 
 * @member {boolean} [runElevated] Gets or sets whether to run the Job Manager
 * task in elevated mode. The default value is false.
 * 
 * @member {boolean} [runExclusive] Gets or sets whether the Job Manager task
 * requires exclusive use of the compute node where it runs.
 * 
 */
function JobManagerTask() {
}

/**
 * Defines the metadata of JobManagerTask
 *
 * @returns {object} metadata of JobManagerTask
 *
 */
JobManagerTask.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'JobManagerTask',
    type: {
      name: 'Composite',
      className: 'JobManagerTask',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        displayName: {
          required: false,
          serializedName: 'displayName',
          type: {
            name: 'String'
          }
        },
        commandLine: {
          required: false,
          serializedName: 'commandLine',
          type: {
            name: 'String'
          }
        },
        resourceFiles: {
          required: false,
          serializedName: 'resourceFiles',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ResourceFileElementType',
                type: {
                  name: 'Composite',
                  className: 'ResourceFile'
                }
            }
          }
        },
        environmentSettings: {
          required: false,
          serializedName: 'environmentSettings',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'EnvironmentSettingElementType',
                type: {
                  name: 'Composite',
                  className: 'EnvironmentSetting'
                }
            }
          }
        },
        constraints: {
          required: false,
          serializedName: 'constraints',
          type: {
            name: 'Composite',
            className: 'TaskConstraints'
          }
        },
        killJobOnCompletion: {
          required: false,
          serializedName: 'killJobOnCompletion',
          type: {
            name: 'Boolean'
          }
        },
        runElevated: {
          required: false,
          serializedName: 'runElevated',
          type: {
            name: 'Boolean'
          }
        },
        runExclusive: {
          required: false,
          serializedName: 'runExclusive',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = JobManagerTask;