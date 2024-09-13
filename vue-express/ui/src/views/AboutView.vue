<script lang="ts" setup>
import router from '@/router';
import { ref } from 'vue';

const name = ref("");

async function handleSubmit() {
	try {
		const response = await fetch(`http://localhost:3123/name`, {
			body: JSON.stringify({ name: name.value }),
			headers: new Headers({'content-type': 'application/json'}),
			method: "POST"
		});
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
		const json = await response.json();
		router.push("/summary");

	} catch(error) {
		console.error(`Encountered a problem submitting the form: "${error}"`)
	}
}
</script>

<template>
  <div class="govuk-grid-row">
	<div class="govuk-grid-column-two-thirds">
		<form id="nameForm" v-on:submit.prevent="handleSubmit">
			<div class="govuk-form-group">
				<h1 class="govuk-label-wrapper">
					<label class="govuk-label govuk-label--l" for="enter-email"> Enter your name </label>
				</h1>

				<input v-model="name" class="govuk-input" id="enter-email" name="name" type="text" />
			</div>

			<button type="submit" class="govuk-button" data-module="govuk-button"> Continue </button>
		</form>
	</div>
</div>
</template>

