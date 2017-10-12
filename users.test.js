const fns = require('./users');
const users = require('./mockData/userData');

test('removePass()', function() {
    const updatedUserArray = fns.removePass(users);
    const taskComplete = true;
    updatedUserArray.map(user => {
        if(user.password) {
            taskComplete = false;
        }
    })
    expect(taskComplete).toEqual(true);
})