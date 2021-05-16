const FOLDER_URL = 'https://www.googleapis.com/drive/v3/files?q=%271viqALnQPJqID6Q5SLqo22BxK-wJgNa3B%27+in+parents&fields=files(name,webContentLink,createdTime)&key=AIzaSyAfD_NIfonZI-y7yzQa0LCegY8vhzwGcII'

window.onload = function () {
	getImageLinks().then(function (links) {
		loadImages(links);
	});
};

function getImageLinks() {
	return fetch(FOLDER_URL).then(function (response) {
		return response.json();
	}).then(function (data) {
		return data.files;
	})
}

function loadImages(links) {
	const photoGrid = document.getElementById('photoGrid');
	const COLUMN_COUNT = 4;

	let columns = [];
	for (let i = 0; i < COLUMN_COUNT; i++) {
		columns.push('<div class="photo-grid-column">');
	}

	links.sort(function(a, b) {
		return (new Date(a.createdTime).getTime() > new Date(b.createdTime).getTime()) ? -1 : 1;
	});

	for (let i = 0; i < links.length; i++) {
		const file = links[i];
		const link = file.webContentLink.split('&export')[0];		
		columns[i % COLUMN_COUNT] += `<image src="${link}" alt="${file.name}" loading="lazy"></image>`;
	}

	for (column of columns) {
		column += '</div>';
		photoGrid.innerHTML += column;
	}
}
