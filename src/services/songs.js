import React from 'react';
import { Filter, DisabledInput, ReferenceInput, List, Edit, Create, SimpleForm, Datagrid, TextField, SelectInput, TextInput, EditButton } from 'admin-on-rest/lib/mui';

export const SongsFilter = (props) => (
	<Filter {...props}>
		<TextInput label="search" source="q" alwaysOn />
		<ReferenceInput label="Song" source="_id" reference="songs" allowEmpty>
			<SelectInput optionText="name" />
		</ReferenceInput>
	</Filter>
);

export const SongsList = (props) => (
	<List {...props} filters={<SongsFilter />}>
		<Datagrid>
			<TextField source="_id" />
			<TextField source="name" />
			<EditButton />
		</Datagrid>
	</List>
);

const SongsName = ({ record }) => {
	return <span>Song {record ? `"${record.name}"` : ''}</span>;
};

export const SongsEdit = (props) => (
	<Edit name={<SongsName />} {...props}>
		<SimpleForm>
			<DisabledInput source="_id" />
			<TextInput source="name" />
		</SimpleForm>
	</Edit>
);

export const SongsCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" />
		</SimpleForm>
	</Create>
)