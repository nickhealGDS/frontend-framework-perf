import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async (event) => {
		redirect(302, '/summary');
	}
};
