import {
	render,
	screen
} from '@testing-library/svelte';
import Birthday from './Birthday.svelte';

describe('Birthday.svelte', () => {
	const exampleBirthday = {
		name: 'Johnny',
		dob: '01-11-1970'
	};
	it('should render the birthday component', () => {
		render(Birthday, {
			...exampleBirthday,
			name: 'Johnny'
		});
		expect(
			screen.queryByText('Johnny')
		).toBeVisible();
	});
	it('displays the date of birth', () => {
		render(Birthday, {
			...exampleBirthday,
			dob: '01-12-1970'
		});
		expect(
			screen.queryByText('01-12-1970')
		).toBeVisible();
	});
});
