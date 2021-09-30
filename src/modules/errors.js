function itbrokens() {
        return 3 + z;
};

try {
        itbrokens();
} catch (error) {
        console.error('Woops!');
        console.error(error.message);
}
