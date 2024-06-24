"use strict";

const endpoint = "";

async function fetchDisneyData() {
  const data = await fetch(endpoint);
  return data;
}
