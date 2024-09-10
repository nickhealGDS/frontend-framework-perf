<script>
	import { enhance } from '$app/forms';
</script>

<div class="govuk-grid-row">
	<div class="govuk-grid-column-two-thirds">
		<form method="post" id="nameForm" action="/name" use:enhance>
			<div class="govuk-form-group">
				<h1 class="govuk-label-wrapper">
					<label class="govuk-label govuk-label--l" for="enter-email"> Enter your name </label>
				</h1>

				<input class="govuk-input" id="enter-email" name="name" type="text" />
			</div>

			<button type="submit" class="govuk-button" data-module="govuk-button"> Continue </button>
		</form>
	</div>
</div>
