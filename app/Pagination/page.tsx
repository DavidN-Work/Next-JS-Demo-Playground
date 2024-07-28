/*
 * File: page.tsx
 * Project: demo-app
 * Created Date: Monday, July 29th 2024, 7:24:32 am
 * Author: David Ngo
 * -----
 * Last Modified: Mon Jul 29 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

'use client';

import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Spinner,
  getKeyValue,
} from '@nextui-org/react';
import { toast } from 'react-hot-toast';
import fetchTodos from './Utils/fetchTodos';
import { TTodo } from './Types/TTodo';

const PaginationPage: React.FC = () => {
  const [page, setPage] = useState(1);

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['todos', page],
    queryFn: () => fetchTodos(page),
  });

  const rowsPerPage = 10;

  if (isError) {
    toast.error('Failed to fetch todos');
  }

  const pages = useMemo(() => {
    return data?.total ? Math.ceil(data.total / rowsPerPage) : 0;
  }, [data?.total, rowsPerPage]);

  const loadingState = isLoading || (data?.results.length === 0 && !error) ? 'loading' : 'idle';

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      <div>
        <h1 className="text-xl font-bold tracking-wide leading-6 mb-6 text-center">
          Pagination Test Table
        </h1>
        <Table
          aria-label="Example table with client async pagination"
          bottomContent={
            pages > 0 ? (
              <div className="flex w-full justify-center">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="primary"
                  page={page}
                  total={pages}
                  onChange={page => setPage(page)}
                />
              </div>
            ) : null
          }
        >
          <TableHeader>
            <TableColumn key="id">ID</TableColumn>
            <TableColumn key="title">Title</TableColumn>
            <TableColumn key="completed">Completed</TableColumn>
          </TableHeader>
          <TableBody
            items={data?.results ?? []}
            loadingContent={<Spinner />}
            loadingState={loadingState}
          >
            {(item: TTodo) => (
              <TableRow key={item?.id}>
                {columnKey => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PaginationPage;
