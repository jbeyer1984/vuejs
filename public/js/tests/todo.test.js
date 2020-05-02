import Vue from '../lib/vue';
import {mount} from '@vue/test-utils';
import Todo from '../src/todo';

describe('Test with jest for todo', function () {
    let wrapper = mount(Todo);

    it('should add new task', function () {
        wrapper.setData({tasks: [], newTask: 'any test'});
        wrapper.find('#add').trigger('click');
        // wrapper.find('#content button').trigger('click');
        expect(wrapper.vm.tasks).toHaveLength(1);
    });
});

