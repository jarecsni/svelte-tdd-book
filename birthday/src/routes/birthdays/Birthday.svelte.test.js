import {
	render,
	screen
} from '@testing-library/svelte';
import Birthday from './Birthday.svelte';

describe('Birthday.svelte', () => {
	it('should render the birthday component', () => {
		render(Birthday, { name: 'Johnny' });
		expect(
			screen.queryByText('Johnny')
		).toBeVisible();
	});
	it('displays the date of birth', () => {
		render(Birthday, { dob: '1990-01-01' });
		expect(
			screen.queryByText('1990-01-01')
		).toBeVisible();
	});
});
