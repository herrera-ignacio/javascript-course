function test() {
	var prop = 't';
	var o = {
		prop: 37,
		f: () => {
			console.log(this);
			return this.prop;
		}
	};
	const inner = () => console.log(this);
	return inner;
}
const i = test();
i();