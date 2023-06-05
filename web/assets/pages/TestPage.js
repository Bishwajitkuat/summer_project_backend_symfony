import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Swal from 'sweetalert2';
import axios from 'axios';

function TestPage() {
    return (
        <Layout>
            <div>
                <h2> this is the React test page</h2>
            </div>
        </Layout>
    );

}
export default TestPage;