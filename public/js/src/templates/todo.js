export default `
<template>
<div id="content">
    <h1>TODO TASK</h1>
    <input type="text" value="" v-model="newTask"/>
    <input type="button" id="add" value="add task" @click.prevent="addTask(newTask)">
    <ul>
        <li v-for="task in tasks">
            {{ task }}
        </li>
    </ul>
</div>
</template>
`;
