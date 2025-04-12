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
});
