import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Swal from 'sweetalert2';
import axios from 'axios';

function AnotherPage() {
    return (
        <Layout>
            <div>
                <h2> this is another React test page</h2>
            </div>
        </Layout>
    );

}
export default AnotherPage;