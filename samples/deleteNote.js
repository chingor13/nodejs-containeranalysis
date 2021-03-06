// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// sample-metadata:
//   title: Delete Note
//   description: Deletes a specified Note
//   usage: node deleteNote.js "project-id" "note-id"
async function main(
  projectId = 'your-project-id', // Your GCP Project Id
  noteId = 'my-note-id' // Id of the note
) {
  // [START containeranalysis_delete_note]
  /**
   * TODO(developer): Uncomment these variables before running the sample
   */
  // const projectId = 'your-project-id', // Your GCP Project Id
  // const noteId = 'my-note-id' // Id of the note

  // Import the library and create a client
  const {ContainerAnalysisClient} = require('@google-cloud/containeranalysis');
  const client = new ContainerAnalysisClient();

  // Get the full path to the note
  const formattedName = client.notePath(projectId, noteId);

  // Delete the note
  await client.getGrafeasClient().deleteNote({name: formattedName});
  console.log(`Note ${formattedName} deleted.`);
  // [END containeranalysis_delete_note]
}

main(...process.argv.slice(2));
